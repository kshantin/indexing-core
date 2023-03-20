import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_, Tree, TreeParent, TreeChildren} from "typeorm"
import {Pack} from "./pack.model"
import {Event} from "./event.model"

@Entity_()
@Tree("closure-table")
export class User {
    constructor(props?: Partial<User>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @TreeParent()
    marketingReferrer!: User | undefined | null

    @TreeChildren()
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
