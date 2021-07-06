import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributenameSumFieldsModelBase } from "./PokemonV2MoveattributenameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributenameSumFieldsModel */
export interface PokemonV2MoveattributenameSumFieldsModelType extends Instance<typeof PokemonV2MoveattributenameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributenameSumFieldsModel */
export { selectFromPokemonV2MoveattributenameSumFields, pokemonV2MoveattributenameSumFieldsModelPrimitives, PokemonV2MoveattributenameSumFieldsModelSelector } from "./PokemonV2MoveattributenameSumFieldsModel.base"

/**
 * PokemonV2MoveattributenameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MoveattributenameSumFieldsModel = PokemonV2MoveattributenameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
