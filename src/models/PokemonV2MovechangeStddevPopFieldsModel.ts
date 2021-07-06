import { Instance } from "mobx-state-tree"
import { PokemonV2MovechangeStddevPopFieldsModelBase } from "./PokemonV2MovechangeStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovechangeStddevPopFieldsModel */
export interface PokemonV2MovechangeStddevPopFieldsModelType extends Instance<typeof PokemonV2MovechangeStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovechangeStddevPopFieldsModel */
export { selectFromPokemonV2MovechangeStddevPopFields, pokemonV2MovechangeStddevPopFieldsModelPrimitives, PokemonV2MovechangeStddevPopFieldsModelSelector } from "./PokemonV2MovechangeStddevPopFieldsModel.base"

/**
 * PokemonV2MovechangeStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovechangeStddevPopFieldsModel = PokemonV2MovechangeStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
