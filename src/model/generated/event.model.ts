import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {User} from "./user.model"
import {EventLog, fromJsonEventLog} from "./_eventLog"

@Entity_()
export class Event {
    constructor(props?: Partial<Event>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => User, {nullable: true})
    user!: User

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonEventLog(obj)}, nullable: true})
    eventLog!: EventLog | undefined | null

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date
}
