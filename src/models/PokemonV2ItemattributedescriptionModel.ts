import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributedescriptionModelBase } from "./PokemonV2ItemattributedescriptionModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributedescriptionModel */
export interface PokemonV2ItemattributedescriptionModelType extends Instance<typeof PokemonV2ItemattributedescriptionModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributedescriptionModel */
export { selectFromPokemonV2Itemattributedescription, pokemonV2ItemattributedescriptionModelPrimitives, PokemonV2ItemattributedescriptionModelSelector } from "./PokemonV2ItemattributedescriptionModel.base"

/**
 * PokemonV2ItemattributedescriptionModel
 *
 * columns and relationships of "pokemon_v2_itemattributedescription"
 */
export const PokemonV2ItemattributedescriptionModel = PokemonV2ItemattributedescriptionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
