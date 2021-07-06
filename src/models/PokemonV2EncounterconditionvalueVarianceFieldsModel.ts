import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvalueVarianceFieldsModelBase } from "./PokemonV2EncounterconditionvalueVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvalueVarianceFieldsModel */
export interface PokemonV2EncounterconditionvalueVarianceFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvalueVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvalueVarianceFieldsModel */
export { selectFromPokemonV2EncounterconditionvalueVarianceFields, pokemonV2EncounterconditionvalueVarianceFieldsModelPrimitives, PokemonV2EncounterconditionvalueVarianceFieldsModelSelector } from "./PokemonV2EncounterconditionvalueVarianceFieldsModel.base"

/**
 * PokemonV2EncounterconditionvalueVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2EncounterconditionvalueVarianceFieldsModel = PokemonV2EncounterconditionvalueVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
