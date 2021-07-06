import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffecteffecttextVarianceFieldsModelBase } from "./PokemonV2MoveeffecteffecttextVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffecteffecttextVarianceFieldsModel */
export interface PokemonV2MoveeffecteffecttextVarianceFieldsModelType extends Instance<typeof PokemonV2MoveeffecteffecttextVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffecteffecttextVarianceFieldsModel */
export { selectFromPokemonV2MoveeffecteffecttextVarianceFields, pokemonV2MoveeffecteffecttextVarianceFieldsModelPrimitives, PokemonV2MoveeffecteffecttextVarianceFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextVarianceFieldsModel.base"

/**
 * PokemonV2MoveeffecteffecttextVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MoveeffecteffecttextVarianceFieldsModel = PokemonV2MoveeffecteffecttextVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
