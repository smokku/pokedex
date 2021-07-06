import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributemapModelBase } from "./PokemonV2ItemattributemapModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributemapModel */
export interface PokemonV2ItemattributemapModelType extends Instance<typeof PokemonV2ItemattributemapModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributemapModel */
export { selectFromPokemonV2Itemattributemap, pokemonV2ItemattributemapModelPrimitives, PokemonV2ItemattributemapModelSelector } from "./PokemonV2ItemattributemapModel.base"

/**
 * PokemonV2ItemattributemapModel
 *
 * columns and relationships of "pokemon_v2_itemattributemap"
 */
export const PokemonV2ItemattributemapModel = PokemonV2ItemattributemapModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
