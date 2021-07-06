import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentnameModelBase } from "./PokemonV2MovemetaailmentnameModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentnameModel */
export interface PokemonV2MovemetaailmentnameModelType extends Instance<typeof PokemonV2MovemetaailmentnameModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentnameModel */
export { selectFromPokemonV2Movemetaailmentname, pokemonV2MovemetaailmentnameModelPrimitives, PokemonV2MovemetaailmentnameModelSelector } from "./PokemonV2MovemetaailmentnameModel.base"

/**
 * PokemonV2MovemetaailmentnameModel
 *
 * columns and relationships of "pokemon_v2_movemetaailmentname"
 */
export const PokemonV2MovemetaailmentnameModel = PokemonV2MovemetaailmentnameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
