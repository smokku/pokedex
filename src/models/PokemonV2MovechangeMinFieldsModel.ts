import { Instance } from "mobx-state-tree"
import { PokemonV2MovechangeMinFieldsModelBase } from "./PokemonV2MovechangeMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovechangeMinFieldsModel */
export interface PokemonV2MovechangeMinFieldsModelType extends Instance<typeof PokemonV2MovechangeMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovechangeMinFieldsModel */
export { selectFromPokemonV2MovechangeMinFields, pokemonV2MovechangeMinFieldsModelPrimitives, PokemonV2MovechangeMinFieldsModelSelector } from "./PokemonV2MovechangeMinFieldsModel.base"

/**
 * PokemonV2MovechangeMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MovechangeMinFieldsModel = PokemonV2MovechangeMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
