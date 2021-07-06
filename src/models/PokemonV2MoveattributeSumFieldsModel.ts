import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributeSumFieldsModelBase } from "./PokemonV2MoveattributeSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributeSumFieldsModel */
export interface PokemonV2MoveattributeSumFieldsModelType extends Instance<typeof PokemonV2MoveattributeSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributeSumFieldsModel */
export { selectFromPokemonV2MoveattributeSumFields, pokemonV2MoveattributeSumFieldsModelPrimitives, PokemonV2MoveattributeSumFieldsModelSelector } from "./PokemonV2MoveattributeSumFieldsModel.base"

/**
 * PokemonV2MoveattributeSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MoveattributeSumFieldsModel = PokemonV2MoveattributeSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
