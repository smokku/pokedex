import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflavortextModelBase } from "./PokemonV2ItemflavortextModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflavortextModel */
export interface PokemonV2ItemflavortextModelType extends Instance<typeof PokemonV2ItemflavortextModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflavortextModel */
export { selectFromPokemonV2Itemflavortext, pokemonV2ItemflavortextModelPrimitives, PokemonV2ItemflavortextModelSelector } from "./PokemonV2ItemflavortextModel.base"

/**
 * PokemonV2ItemflavortextModel
 *
 * columns and relationships of "pokemon_v2_itemflavortext"
 */
export const PokemonV2ItemflavortextModel = PokemonV2ItemflavortextModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
