import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributemapMinFieldsModelBase } from "./PokemonV2MoveattributemapMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributemapMinFieldsModel */
export interface PokemonV2MoveattributemapMinFieldsModelType extends Instance<typeof PokemonV2MoveattributemapMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributemapMinFieldsModel */
export { selectFromPokemonV2MoveattributemapMinFields, pokemonV2MoveattributemapMinFieldsModelPrimitives, PokemonV2MoveattributemapMinFieldsModelSelector } from "./PokemonV2MoveattributemapMinFieldsModel.base"

/**
 * PokemonV2MoveattributemapMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MoveattributemapMinFieldsModel = PokemonV2MoveattributemapMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
