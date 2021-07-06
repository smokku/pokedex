import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonstatAvgFieldsModelBase } from "./PokemonV2PokemonstatAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonstatAvgFieldsModel */
export interface PokemonV2PokemonstatAvgFieldsModelType extends Instance<typeof PokemonV2PokemonstatAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonstatAvgFieldsModel */
export { selectFromPokemonV2PokemonstatAvgFields, pokemonV2PokemonstatAvgFieldsModelPrimitives, PokemonV2PokemonstatAvgFieldsModelSelector } from "./PokemonV2PokemonstatAvgFieldsModel.base"

/**
 * PokemonV2PokemonstatAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonstatAvgFieldsModel = PokemonV2PokemonstatAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
