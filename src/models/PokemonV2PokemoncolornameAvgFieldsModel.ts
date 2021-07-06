import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolornameAvgFieldsModelBase } from "./PokemonV2PokemoncolornameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolornameAvgFieldsModel */
export interface PokemonV2PokemoncolornameAvgFieldsModelType extends Instance<typeof PokemonV2PokemoncolornameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolornameAvgFieldsModel */
export { selectFromPokemonV2PokemoncolornameAvgFields, pokemonV2PokemoncolornameAvgFieldsModelPrimitives, PokemonV2PokemoncolornameAvgFieldsModelSelector } from "./PokemonV2PokemoncolornameAvgFieldsModel.base"

/**
 * PokemonV2PokemoncolornameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemoncolornameAvgFieldsModel = PokemonV2PokemoncolornameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
