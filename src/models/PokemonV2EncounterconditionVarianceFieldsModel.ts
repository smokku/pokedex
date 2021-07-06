import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionVarianceFieldsModelBase } from "./PokemonV2EncounterconditionVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionVarianceFieldsModel */
export interface PokemonV2EncounterconditionVarianceFieldsModelType extends Instance<typeof PokemonV2EncounterconditionVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionVarianceFieldsModel */
export { selectFromPokemonV2EncounterconditionVarianceFields, pokemonV2EncounterconditionVarianceFieldsModelPrimitives, PokemonV2EncounterconditionVarianceFieldsModelSelector } from "./PokemonV2EncounterconditionVarianceFieldsModel.base"

/**
 * PokemonV2EncounterconditionVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2EncounterconditionVarianceFieldsModel = PokemonV2EncounterconditionVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
