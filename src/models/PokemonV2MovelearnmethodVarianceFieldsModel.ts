import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodVarianceFieldsModelBase } from "./PokemonV2MovelearnmethodVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodVarianceFieldsModel */
export interface PokemonV2MovelearnmethodVarianceFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodVarianceFieldsModel */
export { selectFromPokemonV2MovelearnmethodVarianceFields, pokemonV2MovelearnmethodVarianceFieldsModelPrimitives, PokemonV2MovelearnmethodVarianceFieldsModelSelector } from "./PokemonV2MovelearnmethodVarianceFieldsModel.base"

/**
 * PokemonV2MovelearnmethodVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MovelearnmethodVarianceFieldsModel = PokemonV2MovelearnmethodVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
