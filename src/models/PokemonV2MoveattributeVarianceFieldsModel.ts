import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributeVarianceFieldsModelBase } from "./PokemonV2MoveattributeVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributeVarianceFieldsModel */
export interface PokemonV2MoveattributeVarianceFieldsModelType extends Instance<typeof PokemonV2MoveattributeVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributeVarianceFieldsModel */
export { selectFromPokemonV2MoveattributeVarianceFields, pokemonV2MoveattributeVarianceFieldsModelPrimitives, PokemonV2MoveattributeVarianceFieldsModelSelector } from "./PokemonV2MoveattributeVarianceFieldsModel.base"

/**
 * PokemonV2MoveattributeVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MoveattributeVarianceFieldsModel = PokemonV2MoveattributeVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
