import { Instance } from "mobx-state-tree"
import { PokemonV2MovechangeStddevFieldsModelBase } from "./PokemonV2MovechangeStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovechangeStddevFieldsModel */
export interface PokemonV2MovechangeStddevFieldsModelType extends Instance<typeof PokemonV2MovechangeStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovechangeStddevFieldsModel */
export { selectFromPokemonV2MovechangeStddevFields, pokemonV2MovechangeStddevFieldsModelPrimitives, PokemonV2MovechangeStddevFieldsModelSelector } from "./PokemonV2MovechangeStddevFieldsModel.base"

/**
 * PokemonV2MovechangeStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovechangeStddevFieldsModel = PokemonV2MovechangeStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
