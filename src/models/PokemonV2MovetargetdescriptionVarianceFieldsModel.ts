import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetdescriptionVarianceFieldsModelBase } from "./PokemonV2MovetargetdescriptionVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetdescriptionVarianceFieldsModel */
export interface PokemonV2MovetargetdescriptionVarianceFieldsModelType extends Instance<typeof PokemonV2MovetargetdescriptionVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetdescriptionVarianceFieldsModel */
export { selectFromPokemonV2MovetargetdescriptionVarianceFields, pokemonV2MovetargetdescriptionVarianceFieldsModelPrimitives, PokemonV2MovetargetdescriptionVarianceFieldsModelSelector } from "./PokemonV2MovetargetdescriptionVarianceFieldsModel.base"

/**
 * PokemonV2MovetargetdescriptionVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MovetargetdescriptionVarianceFieldsModel = PokemonV2MovetargetdescriptionVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
