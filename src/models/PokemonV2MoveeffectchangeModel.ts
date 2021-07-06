import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeModelBase } from "./PokemonV2MoveeffectchangeModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeModel */
export interface PokemonV2MoveeffectchangeModelType extends Instance<typeof PokemonV2MoveeffectchangeModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeModel */
export { selectFromPokemonV2Moveeffectchange, pokemonV2MoveeffectchangeModelPrimitives, PokemonV2MoveeffectchangeModelSelector } from "./PokemonV2MoveeffectchangeModel.base"

/**
 * PokemonV2MoveeffectchangeModel
 *
 * columns and relationships of "pokemon_v2_moveeffectchange"
 */
export const PokemonV2MoveeffectchangeModel = PokemonV2MoveeffectchangeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
