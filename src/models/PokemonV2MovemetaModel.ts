import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaModelBase } from "./PokemonV2MovemetaModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaModel */
export interface PokemonV2MovemetaModelType extends Instance<typeof PokemonV2MovemetaModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaModel */
export { selectFromPokemonV2Movemeta, pokemonV2MovemetaModelPrimitives, PokemonV2MovemetaModelSelector } from "./PokemonV2MovemetaModel.base"

/**
 * PokemonV2MovemetaModel
 *
 * columns and relationships of "pokemon_v2_movemeta"
 */
export const PokemonV2MovemetaModel = PokemonV2MovemetaModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
