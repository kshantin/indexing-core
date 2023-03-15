module.exports = class Data1678871057184 {
    name = 'Data1678871057184'

    async up(db) {
        await db.query(`CREATE TABLE "pack" ("id" character varying NOT NULL, "level" integer NOT NULL, "expires_at" TIMESTAMP WITH TIME ZONE NOT NULL, "user_id" character varying, CONSTRAINT "PK_c125718b999b41a621b0d799e02" PRIMARY KEY ("id"))`)
        await db.query(`CREATE UNIQUE INDEX "IDX_36ee2f620e4b65fb5d5aa9d90c" ON "pack" ("user_id", "level") `)
        await db.query(`CREATE TABLE "event" ("id" character varying NOT NULL, "event_log" jsonb, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "tx_hash" text NOT NULL, "user_id" character varying, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e6358bd3df1b2874637dca92bc" ON "event" ("user_id") `)
        await db.query(`CREATE INDEX "IDX_f0e0f3ea08224cc8c0ef1c7ae8" ON "event" ("created_at") `)
        await db.query(`CREATE INDEX "IDX_08c0745a40c1d4d3458db90c6f" ON "event" ("tx_hash") `)
        await db.query(`CREATE TABLE "user" ("id" character varying NOT NULL, "depth" integer NOT NULL, "direct_referrals_count" integer NOT NULL, "marketing_referrer_id" character varying, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_8c41abea3b835bacd3f9bb73d0" ON "user" ("marketing_referrer_id") `)
        await db.query(`ALTER TABLE "pack" ADD CONSTRAINT "FK_1268dbf031f1593428c0e15d333" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_e6358bd3df1b2874637dca92bcf" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_8c41abea3b835bacd3f9bb73d0c" FOREIGN KEY ("marketing_referrer_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "pack"`)
        await db.query(`DROP INDEX "public"."IDX_36ee2f620e4b65fb5d5aa9d90c"`)
        await db.query(`DROP TABLE "event"`)
        await db.query(`DROP INDEX "public"."IDX_e6358bd3df1b2874637dca92bc"`)
        await db.query(`DROP INDEX "public"."IDX_f0e0f3ea08224cc8c0ef1c7ae8"`)
        await db.query(`DROP INDEX "public"."IDX_08c0745a40c1d4d3458db90c6f"`)
        await db.query(`DROP TABLE "user"`)
        await db.query(`DROP INDEX "public"."IDX_8c41abea3b835bacd3f9bb73d0"`)
        await db.query(`ALTER TABLE "pack" DROP CONSTRAINT "FK_1268dbf031f1593428c0e15d333"`)
        await db.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_e6358bd3df1b2874637dca92bcf"`)
        await db.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_8c41abea3b835bacd3f9bb73d0c"`)
    }
}
