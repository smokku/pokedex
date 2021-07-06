import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesnameAvgFieldsModelBase } from "./PokemonV2PokemonspeciesnameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesnameAvgFieldsModel */
export interface PokemonV2PokemonspeciesnameAvgFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesnameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesnameAvgFieldsModel */
export { selectFromPokemonV2PokemonspeciesnameAvgFields, pokemonV2PokemonspeciesnameAvgFieldsModelPrimitives, PokemonV2PokemonspeciesnameAvgFieldsModelSelector } from "./PokemonV2PokemonspeciesnameAvgFieldsModel.base"

/**
 * PokemonV2PokemonspeciesnameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonspeciesnameAvgFieldsModel = PokemonV2PokemonspeciesnameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
