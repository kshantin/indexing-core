import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import {Pack} from "./pack.model"
import {Event} from "./event.model"

@Entity_()
export class User {
    constructor(props?: Partial<User>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => User, {nullable: true})
    marketingReferrer!: User | undefined | null

    @OneToMany_(() => User, e => e.marketingReferrer)
    marketingReferrals!: User[]

    @Column_("int4", {nullable: false})
    depth!: number

    @Column_("int4", {nullable: false})
    directReferralsCount!: number

    @OneToMany_(() => Pack, e => e.user)
    packs!: Pack[]

    @OneToMany_(() => Event, e => e.user)
    events!: Event[]
}
