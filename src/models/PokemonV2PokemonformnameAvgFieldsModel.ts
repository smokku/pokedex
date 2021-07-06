import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformnameAvgFieldsModelBase } from "./PokemonV2PokemonformnameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformnameAvgFieldsModel */
export interface PokemonV2PokemonformnameAvgFieldsModelType extends Instance<typeof PokemonV2PokemonformnameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformnameAvgFieldsModel */
export { selectFromPokemonV2PokemonformnameAvgFields, pokemonV2PokemonformnameAvgFieldsModelPrimitives, PokemonV2PokemonformnameAvgFieldsModelSelector } from "./PokemonV2PokemonformnameAvgFieldsModel.base"

/**
 * PokemonV2PokemonformnameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonformnameAvgFieldsModel = PokemonV2PokemonformnameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
