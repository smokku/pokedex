import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributenameVarianceFieldsModelBase } from "./PokemonV2MoveattributenameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributenameVarianceFieldsModel */
export interface PokemonV2MoveattributenameVarianceFieldsModelType extends Instance<typeof PokemonV2MoveattributenameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributenameVarianceFieldsModel */
export { selectFromPokemonV2MoveattributenameVarianceFields, pokemonV2MoveattributenameVarianceFieldsModelPrimitives, PokemonV2MoveattributenameVarianceFieldsModelSelector } from "./PokemonV2MoveattributenameVarianceFieldsModel.base"

/**
 * PokemonV2MoveattributenameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MoveattributenameVarianceFieldsModel = PokemonV2MoveattributenameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
