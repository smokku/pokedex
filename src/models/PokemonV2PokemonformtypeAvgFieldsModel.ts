import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformtypeAvgFieldsModelBase } from "./PokemonV2PokemonformtypeAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformtypeAvgFieldsModel */
export interface PokemonV2PokemonformtypeAvgFieldsModelType extends Instance<typeof PokemonV2PokemonformtypeAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformtypeAvgFieldsModel */
export { selectFromPokemonV2PokemonformtypeAvgFields, pokemonV2PokemonformtypeAvgFieldsModelPrimitives, PokemonV2PokemonformtypeAvgFieldsModelSelector } from "./PokemonV2PokemonformtypeAvgFieldsModel.base"

/**
 * PokemonV2PokemonformtypeAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonformtypeAvgFieldsModel = PokemonV2PokemonformtypeAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
