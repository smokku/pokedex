import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributedescriptionVarianceFieldsModelBase } from "./PokemonV2MoveattributedescriptionVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributedescriptionVarianceFieldsModel */
export interface PokemonV2MoveattributedescriptionVarianceFieldsModelType extends Instance<typeof PokemonV2MoveattributedescriptionVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributedescriptionVarianceFieldsModel */
export { selectFromPokemonV2MoveattributedescriptionVarianceFields, pokemonV2MoveattributedescriptionVarianceFieldsModelPrimitives, PokemonV2MoveattributedescriptionVarianceFieldsModelSelector } from "./PokemonV2MoveattributedescriptionVarianceFieldsModel.base"

/**
 * PokemonV2MoveattributedescriptionVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MoveattributedescriptionVarianceFieldsModel = PokemonV2MoveattributedescriptionVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
