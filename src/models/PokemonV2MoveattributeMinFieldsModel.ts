import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributeMinFieldsModelBase } from "./PokemonV2MoveattributeMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributeMinFieldsModel */
export interface PokemonV2MoveattributeMinFieldsModelType extends Instance<typeof PokemonV2MoveattributeMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributeMinFieldsModel */
export { selectFromPokemonV2MoveattributeMinFields, pokemonV2MoveattributeMinFieldsModelPrimitives, PokemonV2MoveattributeMinFieldsModelSelector } from "./PokemonV2MoveattributeMinFieldsModel.base"

/**
 * PokemonV2MoveattributeMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MoveattributeMinFieldsModel = PokemonV2MoveattributeMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
