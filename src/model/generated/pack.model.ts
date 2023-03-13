import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import {User} from "./user.model"

@Index_(["user", "level"], {unique: true})
@Entity_()
export class Pack {
    constructor(props?: Partial<Pack>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @ManyToOne_(() => User, {nullable: true})
    user!: User

    @Column_("int4", {nullable: false})
    level!: number

    @Column_("timestamp with time zone", {nullable: false})
    expiresAt!: Date
}
