import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformAvgFieldsModelBase } from "./PokemonV2PokemonformAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformAvgFieldsModel */
export interface PokemonV2PokemonformAvgFieldsModelType extends Instance<typeof PokemonV2PokemonformAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformAvgFieldsModel */
export { selectFromPokemonV2PokemonformAvgFields, pokemonV2PokemonformAvgFieldsModelPrimitives, PokemonV2PokemonformAvgFieldsModelSelector } from "./PokemonV2PokemonformAvgFieldsModel.base"

/**
 * PokemonV2PokemonformAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonformAvgFieldsModel = PokemonV2PokemonformAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
