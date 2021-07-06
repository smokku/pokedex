import { Instance } from "mobx-state-tree"
import { PokemonV2MoveflavortextModelBase } from "./PokemonV2MoveflavortextModel.base"

/* The TypeScript type of an instance of PokemonV2MoveflavortextModel */
export interface PokemonV2MoveflavortextModelType extends Instance<typeof PokemonV2MoveflavortextModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveflavortextModel */
export { selectFromPokemonV2Moveflavortext, pokemonV2MoveflavortextModelPrimitives, PokemonV2MoveflavortextModelSelector } from "./PokemonV2MoveflavortextModel.base"

/**
 * PokemonV2MoveflavortextModel
 *
 * columns and relationships of "pokemon_v2_moveflavortext"
 */
export const PokemonV2MoveflavortextModel = PokemonV2MoveflavortextModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
