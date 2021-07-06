import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetVarianceFieldsModelBase } from "./PokemonV2MovetargetVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetVarianceFieldsModel */
export interface PokemonV2MovetargetVarianceFieldsModelType extends Instance<typeof PokemonV2MovetargetVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetVarianceFieldsModel */
export { selectFromPokemonV2MovetargetVarianceFields, pokemonV2MovetargetVarianceFieldsModelPrimitives, PokemonV2MovetargetVarianceFieldsModelSelector } from "./PokemonV2MovetargetVarianceFieldsModel.base"

/**
 * PokemonV2MovetargetVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MovetargetVarianceFieldsModel = PokemonV2MovetargetVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
