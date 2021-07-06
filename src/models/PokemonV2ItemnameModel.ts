import { Instance } from "mobx-state-tree"
import { PokemonV2ItemnameModelBase } from "./PokemonV2ItemnameModel.base"

/* The TypeScript type of an instance of PokemonV2ItemnameModel */
export interface PokemonV2ItemnameModelType extends Instance<typeof PokemonV2ItemnameModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemnameModel */
export { selectFromPokemonV2Itemname, pokemonV2ItemnameModelPrimitives, PokemonV2ItemnameModelSelector } from "./PokemonV2ItemnameModel.base"

/**
 * PokemonV2ItemnameModel
 *
 * columns and relationships of "pokemon_v2_itemname"
 */
export const PokemonV2ItemnameModel = PokemonV2ItemnameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
