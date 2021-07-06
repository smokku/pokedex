import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetnameSumFieldsModelBase } from "./PokemonV2MovetargetnameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetnameSumFieldsModel */
export interface PokemonV2MovetargetnameSumFieldsModelType extends Instance<typeof PokemonV2MovetargetnameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetnameSumFieldsModel */
export { selectFromPokemonV2MovetargetnameSumFields, pokemonV2MovetargetnameSumFieldsModelPrimitives, PokemonV2MovetargetnameSumFieldsModelSelector } from "./PokemonV2MovetargetnameSumFieldsModel.base"

/**
 * PokemonV2MovetargetnameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MovetargetnameSumFieldsModel = PokemonV2MovetargetnameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
