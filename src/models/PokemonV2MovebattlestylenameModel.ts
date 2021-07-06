import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestylenameModelBase } from "./PokemonV2MovebattlestylenameModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestylenameModel */
export interface PokemonV2MovebattlestylenameModelType extends Instance<typeof PokemonV2MovebattlestylenameModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestylenameModel */
export { selectFromPokemonV2Movebattlestylename, pokemonV2MovebattlestylenameModelPrimitives, PokemonV2MovebattlestylenameModelSelector } from "./PokemonV2MovebattlestylenameModel.base"

/**
 * PokemonV2MovebattlestylenameModel
 *
 * columns and relationships of "pokemon_v2_movebattlestylename"
 */
export const PokemonV2MovebattlestylenameModel = PokemonV2MovebattlestylenameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
