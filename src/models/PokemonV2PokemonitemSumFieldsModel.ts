import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonitemSumFieldsModelBase } from "./PokemonV2PokemonitemSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonitemSumFieldsModel */
export interface PokemonV2PokemonitemSumFieldsModelType extends Instance<typeof PokemonV2PokemonitemSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonitemSumFieldsModel */
export { selectFromPokemonV2PokemonitemSumFields, pokemonV2PokemonitemSumFieldsModelPrimitives, PokemonV2PokemonitemSumFieldsModelSelector } from "./PokemonV2PokemonitemSumFieldsModel.base"

/**
 * PokemonV2PokemonitemSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonitemSumFieldsModel = PokemonV2PokemonitemSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
