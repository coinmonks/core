import "jest-extended";

import {
    Builders as MagistrateBuilders,
    Transactions as MagistrateTransactions,
} from "@arkecosystem/core-magistrate-crypto";
import { Managers, Transactions } from "@arkecosystem/crypto";

let builder: MagistrateBuilders.BusinessResignationBuilder;

describe("Business resignation builder", () => {
    Managers.configManager.setFromPreset("testnet");
    Transactions.TransactionRegistry.registerTransactionType(MagistrateTransactions.BusinessResignationTransaction);

    beforeEach(() => {
        builder = new MagistrateBuilders.BusinessResignationBuilder();
    });

    describe("should test verification", () => {
        it("should be true", () => {
            const actual = builder.sign("passphrase");
            expect(actual.build().verified).toBeTrue();
            expect(actual.verify()).toBeTrue();
        });
    });
});
