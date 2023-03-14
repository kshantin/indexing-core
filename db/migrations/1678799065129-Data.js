module.exports = class Data1678799065129 {
    name = 'Data1678799065129'

    async up(db) {
        await db.query(`ALTER TABLE "event" ADD "tx_hash" text NOT NULL`)
        await db.query(`CREATE INDEX "IDX_f0e0f3ea08224cc8c0ef1c7ae8" ON "event" ("created_at") `)
        await db.query(`CREATE INDEX "IDX_08c0745a40c1d4d3458db90c6f" ON "event" ("tx_hash") `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "event" DROP COLUMN "tx_hash"`)
        await db.query(`DROP INDEX "public"."IDX_f0e0f3ea08224cc8c0ef1c7ae8"`)
        await db.query(`DROP INDEX "public"."IDX_08c0745a40c1d4d3458db90c6f"`)
    }
}
