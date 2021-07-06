import { Instance } from "mobx-state-tree"
import { PokemonV2MovechangeModelBase } from "./PokemonV2MovechangeModel.base"

/* The TypeScript type of an instance of PokemonV2MovechangeModel */
export interface PokemonV2MovechangeModelType extends Instance<typeof PokemonV2MovechangeModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovechangeModel */
export { selectFromPokemonV2Movechange, pokemonV2MovechangeModelPrimitives, PokemonV2MovechangeModelSelector } from "./PokemonV2MovechangeModel.base"

/**
 * PokemonV2MovechangeModel
 *
 * columns and relationships of "pokemon_v2_movechange"
 */
export const PokemonV2MovechangeModel = PokemonV2MovechangeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
