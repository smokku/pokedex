import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonSumFieldsModelBase } from "./PokemonV2PokemonSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonSumFieldsModel */
export interface PokemonV2PokemonSumFieldsModelType extends Instance<typeof PokemonV2PokemonSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonSumFieldsModel */
export { selectFromPokemonV2PokemonSumFields, pokemonV2PokemonSumFieldsModelPrimitives, PokemonV2PokemonSumFieldsModelSelector } from "./PokemonV2PokemonSumFieldsModel.base"

/**
 * PokemonV2PokemonSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonSumFieldsModel = PokemonV2PokemonSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
