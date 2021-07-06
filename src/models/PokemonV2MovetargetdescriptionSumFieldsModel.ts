import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetdescriptionSumFieldsModelBase } from "./PokemonV2MovetargetdescriptionSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetdescriptionSumFieldsModel */
export interface PokemonV2MovetargetdescriptionSumFieldsModelType extends Instance<typeof PokemonV2MovetargetdescriptionSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetdescriptionSumFieldsModel */
export { selectFromPokemonV2MovetargetdescriptionSumFields, pokemonV2MovetargetdescriptionSumFieldsModelPrimitives, PokemonV2MovetargetdescriptionSumFieldsModelSelector } from "./PokemonV2MovetargetdescriptionSumFieldsModel.base"

/**
 * PokemonV2MovetargetdescriptionSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MovetargetdescriptionSumFieldsModel = PokemonV2MovetargetdescriptionSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
