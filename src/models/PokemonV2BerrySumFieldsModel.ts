import { Instance } from "mobx-state-tree"
import { PokemonV2BerrySumFieldsModelBase } from "./PokemonV2BerrySumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerrySumFieldsModel */
export interface PokemonV2BerrySumFieldsModelType extends Instance<typeof PokemonV2BerrySumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerrySumFieldsModel */
export { selectFromPokemonV2BerrySumFields, pokemonV2BerrySumFieldsModelPrimitives, PokemonV2BerrySumFieldsModelSelector } from "./PokemonV2BerrySumFieldsModel.base"

/**
 * PokemonV2BerrySumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2BerrySumFieldsModel = PokemonV2BerrySumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
