import { Instance } from "mobx-state-tree"
import { PokemonV2MovenameSumFieldsModelBase } from "./PokemonV2MovenameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovenameSumFieldsModel */
export interface PokemonV2MovenameSumFieldsModelType extends Instance<typeof PokemonV2MovenameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovenameSumFieldsModel */
export { selectFromPokemonV2MovenameSumFields, pokemonV2MovenameSumFieldsModelPrimitives, PokemonV2MovenameSumFieldsModelSelector } from "./PokemonV2MovenameSumFieldsModel.base"

/**
 * PokemonV2MovenameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MovenameSumFieldsModel = PokemonV2MovenameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
