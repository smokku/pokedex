import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessnameSumFieldsModelBase } from "./PokemonV2BerryfirmnessnameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessnameSumFieldsModel */
export interface PokemonV2BerryfirmnessnameSumFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessnameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessnameSumFieldsModel */
export { selectFromPokemonV2BerryfirmnessnameSumFields, pokemonV2BerryfirmnessnameSumFieldsModelPrimitives, PokemonV2BerryfirmnessnameSumFieldsModelSelector } from "./PokemonV2BerryfirmnessnameSumFieldsModel.base"

/**
 * PokemonV2BerryfirmnessnameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2BerryfirmnessnameSumFieldsModel = PokemonV2BerryfirmnessnameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
