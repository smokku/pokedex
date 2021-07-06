import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodnameSumFieldsModelBase } from "./PokemonV2MovelearnmethodnameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodnameSumFieldsModel */
export interface PokemonV2MovelearnmethodnameSumFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodnameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodnameSumFieldsModel */
export { selectFromPokemonV2MovelearnmethodnameSumFields, pokemonV2MovelearnmethodnameSumFieldsModelPrimitives, PokemonV2MovelearnmethodnameSumFieldsModelSelector } from "./PokemonV2MovelearnmethodnameSumFieldsModel.base"

/**
 * PokemonV2MovelearnmethodnameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MovelearnmethodnameSumFieldsModel = PokemonV2MovelearnmethodnameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
