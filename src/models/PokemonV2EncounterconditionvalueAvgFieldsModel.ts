import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvalueAvgFieldsModelBase } from "./PokemonV2EncounterconditionvalueAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvalueAvgFieldsModel */
export interface PokemonV2EncounterconditionvalueAvgFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvalueAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvalueAvgFieldsModel */
export { selectFromPokemonV2EncounterconditionvalueAvgFields, pokemonV2EncounterconditionvalueAvgFieldsModelPrimitives, PokemonV2EncounterconditionvalueAvgFieldsModelSelector } from "./PokemonV2EncounterconditionvalueAvgFieldsModel.base"

/**
 * PokemonV2EncounterconditionvalueAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2EncounterconditionvalueAvgFieldsModel = PokemonV2EncounterconditionvalueAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
