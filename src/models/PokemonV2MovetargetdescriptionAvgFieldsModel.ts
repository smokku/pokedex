import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetdescriptionAvgFieldsModelBase } from "./PokemonV2MovetargetdescriptionAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetdescriptionAvgFieldsModel */
export interface PokemonV2MovetargetdescriptionAvgFieldsModelType extends Instance<typeof PokemonV2MovetargetdescriptionAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetdescriptionAvgFieldsModel */
export { selectFromPokemonV2MovetargetdescriptionAvgFields, pokemonV2MovetargetdescriptionAvgFieldsModelPrimitives, PokemonV2MovetargetdescriptionAvgFieldsModelSelector } from "./PokemonV2MovetargetdescriptionAvgFieldsModel.base"

/**
 * PokemonV2MovetargetdescriptionAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MovetargetdescriptionAvgFieldsModel = PokemonV2MovetargetdescriptionAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
