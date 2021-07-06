import { Instance } from "mobx-state-tree"
import { PokemonV2MovechangeVarianceFieldsModelBase } from "./PokemonV2MovechangeVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovechangeVarianceFieldsModel */
export interface PokemonV2MovechangeVarianceFieldsModelType extends Instance<typeof PokemonV2MovechangeVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovechangeVarianceFieldsModel */
export { selectFromPokemonV2MovechangeVarianceFields, pokemonV2MovechangeVarianceFieldsModelPrimitives, PokemonV2MovechangeVarianceFieldsModelSelector } from "./PokemonV2MovechangeVarianceFieldsModel.base"

/**
 * PokemonV2MovechangeVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MovechangeVarianceFieldsModel = PokemonV2MovechangeVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
