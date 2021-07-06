import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethoddescriptionVarianceFieldsModelBase } from "./PokemonV2MovelearnmethoddescriptionVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethoddescriptionVarianceFieldsModel */
export interface PokemonV2MovelearnmethoddescriptionVarianceFieldsModelType extends Instance<typeof PokemonV2MovelearnmethoddescriptionVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethoddescriptionVarianceFieldsModel */
export { selectFromPokemonV2MovelearnmethoddescriptionVarianceFields, pokemonV2MovelearnmethoddescriptionVarianceFieldsModelPrimitives, PokemonV2MovelearnmethoddescriptionVarianceFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionVarianceFieldsModel.base"

/**
 * PokemonV2MovelearnmethoddescriptionVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MovelearnmethoddescriptionVarianceFieldsModel = PokemonV2MovelearnmethoddescriptionVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
