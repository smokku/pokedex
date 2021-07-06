import { Instance } from "mobx-state-tree"
import { PokemonV2MovechangeAvgFieldsModelBase } from "./PokemonV2MovechangeAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovechangeAvgFieldsModel */
export interface PokemonV2MovechangeAvgFieldsModelType extends Instance<typeof PokemonV2MovechangeAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovechangeAvgFieldsModel */
export { selectFromPokemonV2MovechangeAvgFields, pokemonV2MovechangeAvgFieldsModelPrimitives, PokemonV2MovechangeAvgFieldsModelSelector } from "./PokemonV2MovechangeAvgFieldsModel.base"

/**
 * PokemonV2MovechangeAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MovechangeAvgFieldsModel = PokemonV2MovechangeAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
