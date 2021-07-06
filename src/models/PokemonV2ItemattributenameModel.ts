import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributenameModelBase } from "./PokemonV2ItemattributenameModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributenameModel */
export interface PokemonV2ItemattributenameModelType extends Instance<typeof PokemonV2ItemattributenameModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributenameModel */
export { selectFromPokemonV2Itemattributename, pokemonV2ItemattributenameModelPrimitives, PokemonV2ItemattributenameModelSelector } from "./PokemonV2ItemattributenameModel.base"

/**
 * PokemonV2ItemattributenameModel
 *
 * columns and relationships of "pokemon_v2_itemattributename"
 */
export const PokemonV2ItemattributenameModel = PokemonV2ItemattributenameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
