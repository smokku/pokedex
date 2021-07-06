import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodModelBase } from "./PokemonV2MovelearnmethodModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodModel */
export interface PokemonV2MovelearnmethodModelType extends Instance<typeof PokemonV2MovelearnmethodModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodModel */
export { selectFromPokemonV2Movelearnmethod, pokemonV2MovelearnmethodModelPrimitives, PokemonV2MovelearnmethodModelSelector } from "./PokemonV2MovelearnmethodModel.base"

/**
 * PokemonV2MovelearnmethodModel
 *
 * columns and relationships of "pokemon_v2_movelearnmethod"
 */
export const PokemonV2MovelearnmethodModel = PokemonV2MovelearnmethodModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
