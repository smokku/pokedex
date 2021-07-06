import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesAvgFieldsModelBase } from "./PokemonV2PokemonspeciesAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesAvgFieldsModel */
export interface PokemonV2PokemonspeciesAvgFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesAvgFieldsModel */
export { selectFromPokemonV2PokemonspeciesAvgFields, pokemonV2PokemonspeciesAvgFieldsModelPrimitives, PokemonV2PokemonspeciesAvgFieldsModelSelector } from "./PokemonV2PokemonspeciesAvgFieldsModel.base"

/**
 * PokemonV2PokemonspeciesAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonspeciesAvgFieldsModel = PokemonV2PokemonspeciesAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
